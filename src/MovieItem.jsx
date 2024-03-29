import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ReviewForm from './ReviewForm';
import EditReviewForm from './EditReviewForm';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  media: {
    height: 278,
    width: 185,
  },
}));

function MovieItem(props) {
  const classes = useStyles();
  const review = props.media.combinable
    ? <EditReviewForm review={props.media.combinable} editReview={props.editReview} />
    : <ReviewForm media_id={props.media.id} addReview={props.addReview} />
  return (
    <Card>
      <CardHeader
        title={props.media.title}
        subheader={props.media.year_of_release}
        action={
          <Button onClick={() => props.deleteMedia(props.media.id)}><DeleteIcon/></Button>
        } />
      <CardMedia
        image={props.media.poster_url}
        title={'Poster for ' + props.media.title}
        className={classes.media} />
      <CardContent>
        {review}
      </CardContent>
      <CardActions>
        {/* <Button
          onClick={} >
          Add to Library
        </Button> */}
      </CardActions>
    </Card>
  )
}

export default MovieItem;
