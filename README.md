## Make sure you have this policy attached to your thing in AWS IOT Core :+1

```
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": "iot:Publish",
                "Resource": "arn:aws:iot: : :topic/"
            }
        ]
    }
```
