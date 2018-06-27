import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';
import WebSessionCounter from 'web-session-counter';
import { styles } from '../_constants';


class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch(userActions.getAll());
        WebSessionCounter.update();
    }

    handleDeleteUser(id) {
        return (e) => this.props.dispatch(userActions.delete(id));
    }

    dropDown() {
        document.getElementById('headerDropDown').classList.add('hover', 'headerMenuIcon');
    }
    removeDropDown() {
        document.getElementById('headerDropDown').classList.remove('hover', 'headerMenuIcon');
    }

    


    render() {
        const { user, users } = this.props;
        
        //first letter capitalized
        let firstNameUpper = user.firstName.slice(0,1).toUpperCase() + user.firstName.slice(1, user.firstName.lenght); 
        let lastNameUpper = user.lastName.slice(0,1).toUpperCase() + user.lastName.slice(1, user.lastName.lenght);

        //const
        let menu = <div style={styles.headerMenu}><div onClick={this.dropDown} ><Link to="/something">Put menu icon here</Link></div></div>;
        let dropMenu = <div style={styles.headerDropDown} id="headerDropDown" onMouseLeave={this.removeDropDown}><a>Dashboard</a><a>Something</a></div>
        let headerText = <div style={styles.headerStatus}><div>Welcome {firstNameUpper + ' ' + lastNameUpper}</div><div><p><Link to="/login">Logout</Link></p></div></div>    
        
        let header = <div className="header"><div style={styles.headerStyle} className="headerContainer">{menu}{headerText}</div>{dropMenu}</div>;
        
        const count = WebSessionCounter.count;

        return (
            <div style={styles.contentContainer} className="content-container">
                {header}
                <div style={styles.content} className="col-md-6 col-md-offset-3">
                    <div style={styles.usersModul}>
                        <div className="welcomeMessage">
                            <h1>Hi {firstNameUpper}!</h1>
                        </div>
                        
                        <h3>All registered users:</h3>
                        {users.loading && <em>Loading users...</em>}
                        {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                        {users.items &&
                            <ul>
                                {users.items.map((user, index) =>
                                    <li key={user.id}>
                                        {firstNameUpper + ' ' + lastNameUpper}
                                        {
                                            user.deleting ? <em> - Deleting...</em>
                                            : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                            : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                        }
                                    </li>
                                )}
                            </ul>
                        }
                        
                    </div>
                    <div style={styles.sessionsModul} className="sessionCount">
                        <h4>Number of current sessions: {count}</h4>
                    </div>
                </div>
                <div>Hi there</div>
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


const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };