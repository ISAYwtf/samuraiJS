import React from 'react';
import {connect} from 'react-redux';
import {
    followAC,
    setCurrentPageAC,
    setTotalCountAC,
    setUsersAC,
    toggleIsFetchingAC,
    unFollowAC
} from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.getUsers(this.props.currentPage);
    }

    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        this.getUsers(pageNumber);
    }

    getUsers = (currentPage) => {
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
    }

    render = () => <>
        <Users getUsers={this.getUsers} setCurrentPage={this.props.setCurrentPage}
               totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
               users={this.props.users} unFollow={this.props.unFollow} follow={this.props.follow}
               currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
               isFetching={this.props.isFetching}
        />
    </>
}

const mapStateToProps = state => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
})

const mapDispatchToProps = dispatch => ({
    follow: userId => dispatch(followAC(userId)),
    unFollow: userId => dispatch(unFollowAC(userId)),
    setUsers: users => dispatch(setUsersAC(users)),
    setCurrentPage: currentPage => dispatch(setCurrentPageAC(currentPage)),
    setTotalUsersCount: totalCount => dispatch(setTotalCountAC(totalCount)),
    toggleIsFetching: isFetching => dispatch(toggleIsFetchingAC(isFetching))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
