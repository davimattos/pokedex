import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getStats } from '../dashboard/dashboardActions'

class PokemonStats extends Component {

    componentWillMount() {
        this.props.getStats()
    }

    renderImages() {
        const sprites = this.props.stats.sprites || []
        return (
            <div className="pokemon-frame">
                {sprites.back_default &&
                    <div>
                        <h1>Pokemon Stats</h1>
                        <p>Male Default/Shiny</p>
                        <img src={sprites.back_default} />
                        <img src={sprites.front_default} />
                        <img src={sprites.back_shiny} />
                        <img src={sprites.front_shiny} />
                    </div>
                }
                
                {sprites.back_female &&
                    <div>
                        <p>Female Default/Shiny</p>
                        <img src={sprites.back_female} />
                        <img src={sprites.front_female} />
                        <img src={sprites.back_shiny_female} />
                        <img src={sprites.front_shiny_female} />
                    </div>
                }
            </div>
        )
    }

    renderStats() {
        const weight = this.props.stats.weight
        const height = this.props.stats.height
        const name = this.props.stats.name
        return (
            <div>
                <span><strong>Name:</strong> {name}</span>
                <span><strong>Weight:</strong> {weight}</span>
                <span><strong>Height:</strong> {height}</span>                
            </div>
        )
    }

    renderTypes(){
        const typesList = this.props.stats.types || []
        const findTypes = typesList.map(e => e.type)
        return (
            <div>
                {
                    findTypes.map((typeEl, index) => (
                        <span key={typeEl.url}><strong>Type:</strong> {typeEl.name}</span>
                    ))
                }
            </div>
        )
    }

    renderAbilities(){
        const abilitiesList = this.props.stats.abilities || []
        const findAbilities = abilitiesList.map(e => e.ability)
        return (
            <div>
                {
                    findAbilities.map(abilityEl => (
                        <span key={abilityEl.url}><strong>Ability:</strong> {abilityEl.name}</span>
                    ))
                }                
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderImages()}
                {this.renderStats()}
                {this.renderTypes()}
                {this.renderAbilities()}
            </div>
        )
    }
}

const mapStateToProps = state => ({stats: state.dashboard.stats})
// apagar dispath e voltar as rotas normais
const mapDispatchToProps = dispatch => bindActionCreators({ getStats}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PokemonStats)