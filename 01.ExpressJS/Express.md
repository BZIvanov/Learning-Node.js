# Express

## Installing MongoDB on Ubuntu

1. Open a terminal and run the following command:
```bash
sudo apt-get install mongodb
sudo apt-get update
```

2. To start the MongoDB run:
```bash
sudo service mongodb start
mongo
```

3. And to check if everything is ok, in the same terminal where we have our **mongo** running, type:
```bash
show dbs;
```

The expected result is to see names of the databases we have and space in GBs they take.
