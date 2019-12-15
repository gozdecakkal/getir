'use strict';

const express = require('express');
const router = express.Router();
const recordsList = require('../schemas/dataSchema');


router.post('/resultData', function(req, res, next) {
    if (!Object.keys(req.body).includes('startDate') || !Object.keys(req.body).includes('endDate') || !Object.keys(req.body).includes('minValue') || !Object.keys(req.body).includes('maxValue')) {
        res.send({
            code: -1000,
            msg: 'Request is invalid',
        });
        return;
    } else {
        if ((req.body.startDate == '' && req.body.startDate == null) || (req.body.endDate == '' && req.body.endDate == null) || (req.body.minValue == '' && req.body.minValue == null) || (req.body.maxValue == '' && req.body.maxValue == null)) {
            res.send({
                code: -1000,
                msg: 'Request is invalid',
            });
            return;
        }
    }
    
    recordsList.find({
        createdAt: {
            '$gte': req.body.startDate,
            '$lte': req.body.endDate,
        },
    },
    function (err, records) {
        if (err) { // if there is a error
            res.send({
                code: -1,
                msg: err,
            });
            return;
        }  else if (Array.isArray(records) && records.length == 0) { // if records is empty
            res.send({
                code: -2,
                msg: 'There is not record',
            });
            return;
        } else {
            const resultArr = [];
            let countSum = 0;
            records.forEach(element => { // each records cycle
                countSum =  element.counts ? element.counts.reduce((sum1,sum2) => sum1 + sum2, 0) : countSum; // sum values in each element.counts
                if (req.body.maxValue >= countSum && req.body.minValue <= countSum) { // check control value is min and max range
                    const resultObj = {// create the result object
                        'key': element.key,
                        'createdAt': element.createdAt,
                        'totalCount': countSum,
                    };               
                    resultArr.push(resultObj); // push the array 
                }
            });
            console.log(resultArr);
            res.send({
                code: 0,
                msg: 'Success',
                records: resultArr,
            });
        }
    });
});

module.exports = router;
