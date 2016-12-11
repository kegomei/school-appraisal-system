const Sequelize = require('sequelize')
const Model = require('./Model')

class Result extends Model {
  constructor (seqli) {
    super(seqli)
    this.model = this.initModel()
  }

  initModel () {
    return this.seqli.define('result', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        validate: {
          isInt: true
        }
      },
      cid: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      normName: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      level: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      unitOrder: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      winner: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      winnerOrder: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      date: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      score: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      author: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      publishingName: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      principal: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      teamMenber: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      teamMemberSort: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      host: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      publicationName: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      journalLevel: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      resultName: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      knowTeacher: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      outboundTerritory: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      countryOfOrigin: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      numberOfPeople: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      admissionTime: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      reportName: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      sort: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      authorizationTime: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      promulgationTime: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      inventor: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      transferAmount: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      firstAuthor: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      issueTime: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      funding: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      projectUnit: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      platformName: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      cooperation: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      companyName: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      upgradeProject: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      participants: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      establishedTime: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      palteformProjectName: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      cooperationUnit: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      projectName: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      ConferenceName: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      subsidyUnit: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      publicationNameAndLeadInstruction: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      IdentificationUnit: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      issuedUnit: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      name: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      talentName: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      graduatedSchool: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      roverName: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      serviceOrganization: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      visitedCountry: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      visitedTime: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      frequency: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      code: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      tid: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      hid: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      }
    }, {
      timestamps: true
    })
  }
}

module.exports = Result
