import { getIsLimited, getIsNew, setIsLimited, setIsNew } from '../state'
import { useDispatch, useSelector } from 'react-redux'

export const StatusSection = () => {
  const isLimitedChecked = useSelector(getIsLimited)
  const isNewChecked = useSelector(getIsNew)
  const dispatch = useDispatch()

  const isLimitedOnChange = () => {
    dispatch(setIsLimited({ isLimited: !isLimitedChecked }))
  }

  const isNewOnChange = () => {
    dispatch(setIsNew({ isNew: !isNewChecked }))
  }

  return (
    <>
      <p>Status</p>
      <div>
        <label htmlFor="is_limited">Limited</label>
        <input id="is_limited" type="checkbox" checked={isLimitedChecked} onChange={isLimitedOnChange} />

        <label htmlFor="is_new">New</label>
        <input id="is_new" type="checkbox" checked={isNewChecked} onChange={isNewOnChange} />
      </div>
    </>
  )
}
