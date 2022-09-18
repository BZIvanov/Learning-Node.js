## Generating OpenSSL certificate

### Self signed certificate

Self signed certificate is usually used for developemnt only using https. Because the certificate is self signed by us, the browser will still display warnings.

To generate certificate and key run the below command. Note that you need to have openssl installed on your computer. Run this command using powershell for windows.

```bash
openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365
```

- req - request new certificate
- -x509 - it means it is self signed certificate
- -newkey - we want to generate new key
- rsa:4096 - the encryption format for the key, 4096 is how strong the key will be (the bigger the number, the stronger)
- -nodes - allows us to access the key without using password
- -keyout - to specify the key file name
- key.pem - key file name
- -out - to specify the certificate name
- cert.pem - certificate name
- -days - for how many days the certificate will be valid. Default is 30 days.
- 365 - the days for valid certificate
