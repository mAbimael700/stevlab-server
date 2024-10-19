const { Client } = require("basic-ftp")
const fs = require("fs")
// ESM: import { Client } from "basic-ftp"

example()

async function example() {
    const client = new Client()
    client.ftp.verbose = true
    try {
        await client.access({
            host: "192.168.1.164",
            user: "android",
            password: "android",
            // secure: true,
            port: 2221
        })

        //console.log(await client.list())
        await client.ensureDir("/Download").then(async () => {
            const data = await client.list("/Download")
            await client.downloadToDir(process.cwd(), "/Download")

            console.log(data, "Data info");

        })


        //await client.uploadFrom("README.md", "README_FTP.md")
        //await client.downloadTo("README_COPY.md", "README_FTP.md")
    }
    catch (err) {
        console.log(err)
    }
    client.close()
}