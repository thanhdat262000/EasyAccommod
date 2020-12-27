const express = require("express");

const adminController = require("../controllers/admin/adminController.js");

const adminRouter = express.Router();

adminRouter.get("/allApprovedOwners", adminController.getAllApprovedOwners);
adminRouter.get("/allPendingOwners", adminController.getAllPendingOwners);

adminRouter.get("/apartments/approved", adminController.getApprovedPost);
adminRouter.get("/apartments/pending", adminController.getPendingPost);

adminRouter.get("/notification", adminController.getAllNotification);
adminRouter.get("/apartments/disapproved", adminController.getDisapprovedPost);

adminRouter.post("/apartment-post", adminController.postApartment);

// adminRouter.put("/apartments/:id", adminController.putEditApartment);

adminRouter.put("/apartments/:id/rented", adminController.putChangeRented);

adminRouter.put("/apartments/:id/cancel", adminController.putChangeCancel);

adminRouter.get("/apartments/rented", adminController.getAllRented);

adminRouter.get("/apartments/expired", adminController.getAllExpired);

adminRouter.get("/apartments/statistics", adminController.getStatistics);

adminRouter.get("/owner/:id", adminController.getAllOwner);

adminRouter.put(
  "/apartments/:id/disapproved",
  adminController.putChangeDisapproved
);

adminRouter.put("/apartments/:id/approved", adminController.putChangeApproved);

adminRouter.put("/owner/:id/approved", adminController.putChangeApprovedOwner);

module.exports = adminRouter;
