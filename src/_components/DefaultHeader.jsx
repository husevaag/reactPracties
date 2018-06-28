import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { BudgetExpences } from '../_components';
import { userActions } from '../_actions';
import WebSessionCounter from 'web-session-counter';
import { styles } from '../_constants';

class DefaultHeader extends React.Component {
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

        const refresh = function() {
            window.location.reload();
        }

        const { user, users } = this.props;

        let firstNameUpper = user.firstName.slice(0,1).toUpperCase() + user.firstName.slice(1, user.firstName.lenght); 
        let lastNameUpper = user.lastName.slice(0,1).toUpperCase() + user.lastName.slice(1, user.lastName.lenght);
        
        //Header Components
        let menu = <div style={styles.headerMenu}><div onClick={this.dropDown} ><Link to="/something" onClick={refresh}>Put menu icon here</Link></div></div>;
        let dropMenu = <div style={styles.headerDropDown} id="headerDropDown" onMouseLeave={this.removeDropDown}><a>Dashboard</a><a>Something</a></div>
        let headerText = <div style={styles.headerStatus}><div>Welcome {firstNameUpper + ' ' + lastNameUpper}</div><div><p><Link to="/login" onClick={refresh}>Logout</Link></p></div></div>    
        
        let header = <div className="header"><div style={styles.headerStyle} className="headerContainer">{menu}{headerText}</div>{dropMenu}</div>;



        return(
            <div>{header}</div>
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

const connectedHeader = connect(mapStateToProps)(DefaultHeader);

export { connectedHeader as DefaultHeader };