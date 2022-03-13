import { app } from "./app";

app.listen(process.env.PORT || 5555, () => {
    console.log(`Server is running on PORT ${process.env.PORT || 5555}`);
});
