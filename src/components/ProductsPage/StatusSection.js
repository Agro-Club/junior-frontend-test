import { getIsLimited, getIsNew, setIsLimited, setIsNew } from '../state'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

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

  const FiltersLabel = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    color: #a8b8ca;
  `

  return (
    <div>
      <FiltersLabel>Status</FiltersLabel>
      <div>
        <label htmlFor="is_limited">
          <input id="is_limited" type="checkbox" checked={isLimitedChecked} onChange={isLimitedOnChange} />
          Limited
        </label>
        <label htmlFor="is_new">
          <input id="is_new" type="checkbox" checked={isNewChecked} onChange={isNewOnChange} />
          New
        </label>
      </div>
    </div>
  )
}
