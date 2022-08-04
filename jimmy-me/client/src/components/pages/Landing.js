import React from "react";
import { useQuery } from "@apollo/client";
import ReminderList from "../ReminderList/ReminderList";
import ReminderForm from "../ReminderForm/ReminderForm";

import { QUERY_REMINDERS } from "../../utils/queries";

const Landing = () => {
  const { loading, data } = useQuery(QUERY_REMINDERS);
  const Reminders = data?.Reminders || [];

  return (
    <div>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: "1px dotted #1a1a1a" }}
        >
          <ReminderForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ReminderList
              Reminders={Reminders}
              title="Some Feed for Reminder(s)..."
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Landing;
