import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PokemonStats extends Component {

    renderImages() {
        const sprites = this.props.stats.sprites || []
        return (
            <div className="pokemon-frame">
                <h1>Pokemon Stats</h1>
                {sprites.back_default &&
                    <div className="pokemon-images">
                        <p>Male Default/Shiny</p>
                        <img src={sprites.back_default} />
                        <img src={sprites.front_default} />
                        <img src={sprites.back_shiny} />
                        <img src={sprites.front_shiny} />
                    </div>
                }
                
                {sprites.back_female &&
                    <div className="pokemon-images">
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
            <div className="pokemon-stats">
                <span><strong>Name: </strong>{name}</span>
            </div>
            <div className="pokemon-stats">
               <span><strong>Weight: </strong>{weight}</span>
            </div>
            <div className="pokemon-stats">
                <span><strong>Height: </strong>{height}</span> 
            </div>
            </div>         
        )
    }

    renderTypes(){
        const typesList = this.props.stats.types || []
        const findTypes = types => types.type
        const type = type =>  [].concat(type.name,',')
        const result = typesList.map(findTypes).map(type)
        return (
            <div className="pokemon-types">
                <span><strong>Types: </strong>{result}</span>
            </div>
        )
    }

    renderAbilities(){
        const abilitiesList = this.props.stats.abilities || []
        const findAbilities = abilities => abilities.ability
        const ability = ability => [].concat(ability.name, ',')
        const result  = abilitiesList.map(findAbilities).map(ability)
        return (
            <div className="pokemon-abilities">
                <span><strong>Ability: </strong>{result}</span>
            </div>
        )
    }

    render() {
        return (
            <div className="pokemon-general">
                {this.renderImages()}
                {this.renderStats()}
                {this.renderTypes()}
                {this.renderAbilities()}
                <Link to="/" className="pokemon-button">
                    <button type="submit" id="button-custom">Voltar</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => ({stats: state.dashboard.stats})

export default connect(mapStateToProps)(PokemonStats)