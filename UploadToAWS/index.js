const AWS = require('aws-sdk')
const s3 = new AWS.S3()
// const fs = require('fs')

const upload = async () => {

    const fileName = 'nextupload.txt'
    const params = {
        ACL: 'public-read',
        Body: 'Hello World',
        ContentType: 'text/html',
        Bucket: 'guysaws-demo',
        Key: 'file-from-lamda-aws.txt'

    }

    return await new Promise((resolve, reject) => {
        try {
            s3.putObject(params, (err, results) => {
                if (err) reject(err)
                else resolve(results)
            })    
        } catch (error) {
            console.log(error);
        }
        
    })
}

const main = async (event) => {
    console.log('Event', event);

    try {
        return upload();
    } catch (err) {
        console.log("Error when upload to AWS");
    };
}

exports.handler = main