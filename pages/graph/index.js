import React from 'react'
import { LineChart, Line, XAxis, YAxis } from 'recharts'
import cubejs from '@cubejs-client/core'
import { QueryRenderer } from '@cubejs-client/react'
const cubejsApi = cubejs('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpIjozODU5NH0.5wEbQo-VG2DEjR2nBpRpoJeIcE_oJqnrm78yUo9lasw')

console.log(typeof cubejsApi)

class GraphPage extends React.Component {
  render () {
    return (
      <QueryRenderer
        query={{
          measures: ['Stories.count'],
          dimensions: ['Stories.time.month']
        }}
        cubejsApi={cubejsApi}
        render={({ resultSet }) => {
          if (!resultSet) {
            return 'Loading...'
          }

          return (
            <LineChart data={resultSet.rawData()}>
              <XAxis dataKey='Stories.time' />
              <YAxis />
              <Line type='monotone' dataKey='Stories.count' stroke='#8884d8' />
            </LineChart>
          )
        }}
      />
    )
  }
}

export default GraphPage
