const { Router } = require("express");
const router = Router();

router.get("/health", (req, res) => {
    res.json({ ok: true, service: "MarioKartUY Backend" });
});

// Más adelante: router.use("/jugadores", jugadoresRoutes);
// router.use("/torneos", torneosRoutes);

module.exports = router;