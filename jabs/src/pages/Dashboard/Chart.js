import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('08:00', Math.floor(Math.random() * Math.floor(200))),
  createData('12:00', Math.floor(Math.random() * Math.floor(200))),
  createData('16:00', Math.floor(Math.random() * Math.floor(200))),
  createData('20:00', Math.floor(Math.random() * Math.floor(200))),
  createData('22:00', Math.floor(Math.random() * Math.floor(200))),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Vendas Hoje (R$)
            </Label>
          </YAxis>
          <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}