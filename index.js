import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import fileupload from "express-fileupload";
//auth
import AuthRoute from "./routes/AuthRoute.js"
import UserRoute from "./routes/UserRoute.js"
import HakAksesRoute from "./routes/HakAksesRoute.js"
//all
import SuratMasukRoute from "./routes/SuratMasukRoute.js"
import SuratKeluarRoute from "./routes/SuratKeluarRoute.js"
//lapasi
import SatkerRoute from "./routes/LapasiRoute/SatkerRoute.js";
import JabatanRoute from "./routes/LapasiRoute/JabatanRoute.js"
import PegawaiRoute from "./routes/LapasiRoute/PegawaiRoute.js"
//pantai disa
import SekolahRoute from "./routes/DisaRoute/SekolahRoute.js"
import GuruRoute from "./routes/DisaRoute/GuruRoute.js"
import SiswaRoute from "./routes/DisaRoute/SiswaRoute.js"
//akesahu
import HajiRoute from "./routes/AkesahuRoute/DataHajiRoute.js"
//saria
import UmatIslamRoute from "./routes/SariaRoute/UmatIslamRoute.js"
import RumahIbadahIslamRoute from "./routes/SariaRoute/RumahIbadahIslamRoute.js"
import OrganisasiMasyarakatRoute from "./routes/SariaRoute/OrganisasiMasyarakatRoute.js"
import MajelisRoute from "./routes/SariaRoute/MajelisRoute.js"
import LembagaKeagamaanRoute from "./routes/SariaRoute/LembagaKeagamaanRoute.js"
import KuaRoute from "./routes/SariaRoute/KuaRoute.js"
//sahu
import KecamatanRoute from "./routes/SahuRoute/KecamatanRoute.js"
import TanahWakafRoute from "./routes/SahuRoute/TanahWakafRoute.js"
import ZakatRoute from "./routes/SahuRoute/ZakatRoute.js"

//paludi
import GerejaRoute from "./routes/PaludiRoute/GerejaRoute.js"
import GuruPakRoute from "./routes/PaludiRoute/GuruPakRoute.js"
import LembagaKristenRoute from "./routes/PaludiRoute/LembagaRouteKristen.js"
import PenyuluRoute from "./routes/PaludiRoute/PenyuluRoute.js"
import OrganisasiKristenRoute from "./routes/PaludiRoute/OrganisasiKristenRoute.js"
import SekolahKristenRoute from "./routes/PaludiRoute/SekolahKristenRoute.js"
import UmatKristenRoute from "./routes/PaludiRoute/UmatKristenRoute.js"

dotenv.config();
const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});


// (async () => {
//   await db.sync();
// })();

// store.sync();

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(fileupload());
app.use(express.static("public")); 
app.use(express.json());

//auth
app.use(AuthRoute);
app.use(UserRoute);
app.use(HakAksesRoute);

// lapasi
app.use(SatkerRoute);
app.use(JabatanRoute);
app.use(PegawaiRoute);
app.use(SuratMasukRoute);
app.use(SuratKeluarRoute);
// disa
app.use(SuratKeluarRoute);
app.use(SekolahRoute);
app.use(GuruRoute);
app.use(SiswaRoute);
//akesahu
app.use(HajiRoute);
//saria
app.use(UmatIslamRoute);
app.use(RumahIbadahIslamRoute);
app.use(OrganisasiMasyarakatRoute);
app.use(MajelisRoute);
app.use(LembagaKeagamaanRoute);
app.use(KuaRoute);
//sahu
app.use(KecamatanRoute);
app.use(TanahWakafRoute);
app.use(ZakatRoute);

//paludi 
app.use(GerejaRoute);
app.use(GuruPakRoute);
app.use(LembagaKristenRoute);
app.use(OrganisasiKristenRoute);
app.use(PenyuluRoute);
app.use(SekolahKristenRoute);
app.use(UmatKristenRoute);




app.listen(process.env.APP_PORT, () => {
  console.log("server started", process.env.APP_PORT);
});
