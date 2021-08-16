import { Component } from "react";
import './Header';
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    title: {
        color: theme.palette.primary.light,
    }
});

class Home extends Component{
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header baseUrl={this.props.baseUrl} />

                <div className={classes.upcomingMoviesHeading}>
                    <span>Upcoming Movies</span>
                </div>
                </div>
        )
}
}
export default withStyles(styles)(Home);