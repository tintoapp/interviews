import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import moment from 'moment';

import ReviewModal from './src/components/ReviewModal';
import FeedBackModal from './src/components/FeedBackModal';

const mockBackendData = {
  authenticated: true,
  appOpenedCount: 5,
  dateRegistered: '2021-01-01 15:20',
};

const App = () => {
  const [showReview, setShowReview] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  useEffect(() => {
    let now = moment();
    let dateRegistered = moment(
      mockBackendData.dateRegistered,
      'YYYY-MM-DD HH:mm',
    );
    if (
      mockBackendData.authenticated &&
      mockBackendData.appOpenedCount >= 5 &&
      now.diff(dateRegistered, 'hours') > 48
    ) {
      setShowReview(true);
    }
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Home screen</Text>
        {showReview && (
          <ReviewModal
            handleHappy={() => setShowReview(false)}
            handleIgnore={() => setShowReview(false)}
            handleUnHappy={() => {
              setShowReview(false);
              setShowFeedback(true);
            }}
          />
        )}
        {showFeedback && (
          <FeedBackModal
            onSubmit={() => setShowFeedback(false)}
            onChange={(text) => setFeedbackText(text)}
            onLater={() => setShowFeedback(false)}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default App;
