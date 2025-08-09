class CommunicationProfileDto {
    constructor(communicationProfile) {
        this.id = communicationProfile.id
        this.checksumRegex = communicationProfile.checksum_regex
        this.type = communicationProfile.type
    }
}

module.exports = CommunicationProfileDto