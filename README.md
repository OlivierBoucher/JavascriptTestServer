# Javascript test server

## Usage

Be sure to install npm dependencies first
```bash
$ > npm install
```

To start the server
```bash
$ > npm start
```

### Authentication

Every time you restart the server, new credentials are generated and printed to the console.
You must use these credentials to authenticate every request you send.
Authentication is implemented using [Basic HTTP  Authentication](https://www.ietf.org/rfc/rfc2617.txt).

Example:

```
Server listening on port 3000.
Generated credentials:
        user: iemfvsf
        password: fjofgjv

```
