import { UseControllerProps, useController } from 'react-hook-form'
import type { PlanForm } from '../../Form/PlanSection/PlanSection.tsx'
import { SubscriptionLabel } from './PlanTypeInput.styled.tsx'

type PlanTypeInputProps = UseControllerProps<PlanForm> & {
  value: PlanForm['subscription']
}

const PlanTypeInput = (props: PlanTypeInputProps) => {
  const { field } = useController(props)
  return (
    <div id={`${props.value}SubInput`}>
      <SubscriptionLabel checked={field.value === props.value}>
        {props.value}
        <input
          {...field}
          type="radio"
          name="subscription"
          value={props.value}
          checked={field.value === props.value ? true : false}
        />
      </SubscriptionLabel>
    </div>
  )
}

export default PlanTypeInput
