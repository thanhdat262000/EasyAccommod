const express = require("express");
const multer = require("multer");
const ownerController = require("../controllers/owner/ownerController");

const ownerRouter = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./upload/");
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Image uploaded is not of type jpg/jpeg or png"), false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });

ownerRouter.get("/pending", ownerController.getAllPending);

ownerRouter.get("/approved", ownerController.getAllApproved);

ownerRouter.get("/rented", ownerController.getAllRented);

ownerRouter.get("/expired", ownerController.getAllExpired);

ownerRouter.get("/notification", ownerController.getAllNotification);

ownerRouter.get("/disapproved", ownerController.getAllDisapproved);

ownerRouter.post(
  "/post",
  upload.array("image", 4),
  ownerController.postApartment
);

ownerRouter.put("/:id", ownerController.putEditApartment);

ownerRouter.put("/:id/rented", ownerController.putChangeRented);

ownerRouter.put("/:id/cancel", ownerController.putChangeCancel);

module.exports = ownerRouter;
