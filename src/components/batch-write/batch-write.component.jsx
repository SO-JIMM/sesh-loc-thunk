import React from 'react'
import { addCollectionAndDocuments } from '../../firebase/firestore'
import dummyData from './dummy-data'

class BatchWrite extends React.Component {
  componentDidMount() {
    addCollectionAndDocuments('patients', dummyData)
  }

  render() {
    return <div className="BatchWrite"></div>
  }
}

export default BatchWrite
