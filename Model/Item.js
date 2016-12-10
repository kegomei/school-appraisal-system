const Sequelize = require('sequelize')
const Model = require('./Model')

class Item extends Model {
  constructor (seqli) {
    super(seqli)
    this.model = this.initModel()
  }

  initModel () {
    return this.seqli.define('item', {
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
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      unitOrder: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      winner: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      winnerOrder: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      date: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      score: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      author: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      publishingName: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      principal: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      teamMenber: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      teamMemberSort: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      host: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      publicationName: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      journalLevel: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      resultName: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      knowTeacher: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      outboundTerritory: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      countryOfOrigin: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      numberOfPeople: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      admissionTime: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      reportName: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      sort: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      authorizationTime: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      promulgationTime: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      inventor: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      transferAmount: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      firstAuthor: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      issueTime: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      funding: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      projectUnit: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      platformName: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      cooperation: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      companyName: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      upgradeProject: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      participants: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      establishedTime: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      palteformProjectName: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      cooperationUnit: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      projectName: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      ConferenceName: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      subsidyUnit: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      publicationNameAndLeadInstruction: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      IdentificationUnit: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      issuedUnit: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      name: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      talentName: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      graduatedSchool: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      roverName: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      serviceOrganization: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      visitedCountry: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      visitedTime: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      frequency: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      },
      code: {
        type: Sequelize.INTEGER,
        defaultValue: ''
      }
    }, {
      timestamps: true
    })
  }

  getComment () {
    let promise = new Promise((resolve, reject) => {
      try {
        this.seqli
        .query('select COLUMN_NAME, COLUMN_COMMENT from information_schema.COLUMNS where TABLE_NAME="items"')
        .spread((results, metadata) => {
          resolve(results)
        })
      } catch (err) {
        reject(err)
      }
    })
    return promise
  }
  getId (obj) {
    return this.model
      .find(obj)
      .then(data => data.get('id'))
  }
}

module.exports = Item
