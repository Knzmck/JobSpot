const db = require("../models")

module.exports = {
    getJobs(req, res) {
        db.Job
            .findAll()
            .then(dbJob => res.json(dbJob))
            .catch(err => res.status(500).json(err));
    },
    // getJobsByUser(req, res) {
    //     let userId;
    //     db.Job
    //         .findAll({
    //             where: {
    //                 user_id: userId
    //             }
    //         })
    //         .then(dbJob => res.json(dbJob))
    //         .catch(err => res.status(500).json(err));
    // },
    createJob(req, res) {
        db.Job
            .create(req.body)
            .then(dbJob => res.json(dbJob))
            .catch(err => res.status(500).json(err));
    },
    getJob(req, params) {
        const id = req.params.id;
        db.Job
            .findOne({
                where: {
                    id: id
                }
            })
            .then(dbJob => res.json(dbJob))
            .catch(err => res.status(500).json(err));
    },
    updateJob(req, params) {
        const id = req.params.id;
        db.Job
            .update({
                company: req.body,
                job_title: req.body,
                salary: req.body,
                status: req.body,
                notes: req.body
            }, {
                where: {
                    id: id
                }
            }).then(function (dbJob) {
                res.json(dbJob)
            })
    },
    deleteJob(req, params) {
        const id = req.params.id;
        db.Job
            .destroy({
                where: {
                    id: id
                }
            }).then(function (res) {
                console.log(`Job ${id} deleted`);
            })
    }
}