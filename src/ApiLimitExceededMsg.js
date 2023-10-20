import React from 'react';

function ApiLimitExceededMsg() {
  return (
    <div className="api-limit-exceeded-msg text-center">
      <p>
        You have made too many requests recently.Developer accounts are limited <br/>to 100 requests over a 24-hour period (50 requests available every 12 hours), <br/>So please wait and try after sometime.
            Thank You for your Paitence.
      </p>
    </div>
  );
}
export default ApiLimitExceededMsg;
