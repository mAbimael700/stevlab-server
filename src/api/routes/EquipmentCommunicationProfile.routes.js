const { Router } = require("express");
const EquipmentCommunicationProfileRouter = Router();

const EquipmentCommunicationProfile = require("../controllers/EquipmentCommunicationProfile.controller");
const { EquipmentCommunicationProfileService } = require("../../services/Memory/EquipmentCommunicationProfileService");

const service = new EquipmentCommunicationProfileService();
const controller = new EquipmentCommunicationProfile(service);

EquipmentCommunicationProfileRouter.get("/", controller.getAll);


module.exports = {
    EquipmentCommunicationProfileRouter,
};
