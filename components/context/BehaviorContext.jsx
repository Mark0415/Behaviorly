/* eslint-disable react/prop-types */
import React, { useState, createContext } from 'react';
import Moment from 'moment';

export const BehaviorlyContext = createContext();

const BehaviorlyProvider = (props) => {
  const { children } = props;
  const [clientGoals, setClientGoals] = useState({
    Annika: {
      currentGoals: [
        {
          title: 'Volunteer Work / Art Class',
          date: 'May 23rd 2021',
          goals: [
            {
              goal: 'Don\'t eat too much',
              status: 'N/A',
            },
            {
              goal: 'Wash hands after eating',
              status: 'Met',
            },
            {
              goal: 'Tutor session with Alice',
              status: 'Not Met',
            },
          ],
        },
        {
          title: 'Exercise at YMCA / Oakland Library Tutoring Session',
          date: 'May 22rd 2021',
          goals: [
            {
              goal: 'Don\'t eat too much',
              status: 'Met',
            },
            {
              goal: 'Wash hands after eating',
              status: 'Met',
            },
            {
              goal: 'Tutor session with Alice',
              status: 'Not Met',
            },
          ],
        },
      ],
    },
    Kathleen: {
      currentGoals: [
        {
          title: 'Music Class / Art Class',
          date: 'May 23rd 2021',
          goals: [
            {
              goal: 'Arrive to program on time',
              status: 'Met',
            },
            {
              goal: 'Call mother before eating lunch',
              status: 'Not Met',
            },
            {
              goal: 'Avoid non-diabetic food',
              status: 'Met',
            },
          ],
        },
      ],
    },
  });

  const [clients, setClients] = useState([
    {
      name: 'Annika',
      currentGoals: clientGoals.Annika,
      goals: ['Don\'t eat too much', 'Wash hands after eating', 'Tutor session with Alice'],
    },
    {
      name: 'Kathleen',
      currentGoals: clientGoals.Kathleen,
      goals: ['Arrive to program on time', 'Call mother before eating lucnh', 'Avoid non-diabetic food'],
    },
  ]);
  const [clientVisible, setClientVisible] = useState(false);
  const [clientName, setClientName] = useState('');

  return (
    <BehaviorlyContext.Provider value={{
      clientGoalList: [clientGoals, setClientGoals],
      clientList: [clients, setClients],
      visible: [clientVisible, setClientVisible],
      person: [clientName, setClientName],
    }}
    >
      {children}
    </BehaviorlyContext.Provider>
  );
};

export default BehaviorlyProvider;
