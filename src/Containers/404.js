
/* React */
import React from 'react'

/* Components */
import { Row, Column } from 'react-foundation'
import { Portlet, VideoBackground } from 'boosh-react-components'
import { Link } from 'react-router'

class ErrorPage extends React.Component {

  static propTypes = {
    error: React.PropTypes.object,
  }

  componentDidMount() {
    document.title = this.props.error && this.props.error.status === 404 ?
      'Page Not Found' : 'Error';
  }

  render() {
    if (this.props.error) console.error(this.props.error) // eslint-disable-line no-console

    const [code, title] = this.props.error && this.props.error.status === 404 ?
      ['404', 'Page not found'] :
      ['Error', 'Oups, something went wrong'];

    return (
      <div className="page page-error-404">
        <VideoBackground/>
        <Row className="display">
          <Column small={12} medium={6} centerOnMedium>
            <Portlet className="portlet-grey" title={code + ' - ' + title} items={
              <p>The page does not exist or an another error occurred.</p>
            } />
          </Column>
        </Row>
      </div>
    );
  }

}

export default ErrorPage;
