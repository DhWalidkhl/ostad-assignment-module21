


// Run Your Express Back End Project
import app from "./app.js";
import {PORT} from "./app/config/Config.js";

app.listen(PORT, () => {
    console.log(`App Run @${PORT}`);
});
