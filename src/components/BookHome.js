import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';

class BookHome extends Component {
  render() {
    const { book } = this.props;

    return (
      <div className="UpGoing">
        <MuiThemeProvider>
          <List style={{ width: '40%', margin: '0 auto', textAlign: 'left' }}>
            {book.chapters.map(chapter => (
              <Link style={{ textDecoration: 'none' }} to={book.url + chapter.url}>
                <ListItem style={{ fontSize: '30px' }} primaryText={chapter.title} />
              </Link>
            ))}
          </List>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default BookHome;
