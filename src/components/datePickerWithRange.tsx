'use client'

import * as React from 'react'
import { addDays, format, getYear, getMonth, setMonth, setYear } from 'date-fns'
import type { DateRange } from 'react-day-picker'

import { cn } from '@/lib/utils'

import { Calendar } from '@/components/ui/calendar'

interface DatePickerWithRangeProps {
  className?: string
  onChange?: (range: DateRange | undefined) => void
  fromInput: Date
  toInput: Date
}

export default function DatePickerWithRange({
  className,
  onChange,
  fromInput,
  toInput,
}: DatePickerWithRangeProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: fromInput,
    to: addDays(toInput, 20),
  })

  React.useEffect(() => {
    if (onChange) {
      onChange(date)
    }
  }, [date, onChange])

  return (
    <div className={cn('grid gap-2 justify-center', className)}>
      <Calendar
        className="rounded-md border shadow-sm"
        initialFocus
        mode="range"
        defaultMonth={fromInput}
        selected={date}
        onSelect={(selected) => {
          setDate(selected)
          if (onChange) {
            onChange(selected)
          }
        }}
        numberOfMonths={2}
      />
    </div>
  )
}
