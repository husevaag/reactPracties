import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { WebSessionCounter } from 'web-session-counter';

import { userActions } from '../_actions';
import { styles } from '../_constants';

class SomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
        
    }

    
    
    dropDown() {
        document.getElementById('headerDropDown').classList.add('hover', 'headerMenuIcon');
    }
    removeDropDown() {
        document.getElementById('headerDropDown').classList.remove('hover', 'headerMenuIcon');
    }

    render() {
        // define props
        const { user, users } = this.props;
        
        // Uppercase first letter of names
        let firstNameUpper = user.firstName.slice(0,1).toUpperCase() + user.firstName.slice(1, user.firstName.lenght);
        let lastNameUpper = user.lastName.slice(0,1).toUpperCase() + user.lastName.slice(1, user.lastName.lenght);

        // Header elements
        let menu = <div style={styles.headerMenu}><div onClick={this.dropDown} ><Link to="/something">Put menu icon here</Link></div></div>;
        let dropMenu = <div style={styles.headerDropDown} id="headerDropDown" onMouseLeave={this.removeDropDown}><a>Dashboard</a><a>Something</a></div>
        let headerText = <div style={styles.headerStatus}><div>Welcome {firstNameUpper + ' ' + lastNameUpper}</div><div><p><Link to="/login">Logout</Link></p></div></div>    
        
        // The header
        let header = <div className="header"><div style={styles.headerStyle} className="headerContainer">{menu}{headerText}</div>{dropMenu}</div>;
     
        return (
            <div className="something">
                {header}
                
                <div>Something</div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}
const connectedSomePage = connect(mapStateToProps)(SomePage);
export { connectedSomePage as SomePage };