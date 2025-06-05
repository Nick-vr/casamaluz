import * as React from 'react'
import DatePickerWithRange from './DatePickerWithRange'
import { addDays, addYears, format, getYear, getMonth, setMonth, setYear } from 'date-fns'
import type { DateRange } from 'react-day-picker'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i)

const BookingIsland = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 20),
  })
  const [selectedDateRange, setSelectedDateRange] = React.useState<DateRange | undefined>(undefined)
  const [totalPrice, setTotalPrice] = React.useState<number>(0)
  const [viewPrice, setViewPrice] = React.useState<boolean>(false)

  const handleDateChange = (dateRange: DateRange | undefined) => {
    setSelectedDateRange(dateRange)
  }

  const handleYearChange = (year: string) => {
    setDate(undefined)
    setTimeout(() => {
      setDate({
        from: setYear(date?.from ?? new Date(), parseInt(year)),
        to: setYear(date?.from ?? new Date(), parseInt(year)),
      })
    }, 1)
  }

  const getTotalPrice = () => {}

  const handleViewPrice = () => {
    setViewPrice(true)
  }

  return (
    <div className="flex flex-col gap-2">
      <Card className="pt-5 mb-10 rounded-md shadow-xs">
        <CardHeader>
          <CardTitle>Date</CardTitle>
          <CardDescription>
            {selectedDateRange?.from?.toLocaleDateString()} -{' '}
            {selectedDateRange?.to?.toLocaleDateString()}
          </CardDescription>
        </CardHeader>
        <CardContent>&#8364;{totalPrice}</CardContent>
      </Card>
      <div className="flex flex-row w-full">
        <Select onValueChange={handleYearChange}>
          <SelectTrigger className="w-full justify-center">
            <SelectValue placeholder={getYear(new Date())} />
          </SelectTrigger>
          <SelectContent>
            {years.map((year) => (
              <SelectItem className="w-full justify-center" key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {!date && <div className="rounded-md border shadow-sm calendar-placeholder"></div>}
      {date && (
        <DatePickerWithRange
          onChange={handleDateChange}
          fromInput={date?.from ?? new Date()}
          toInput={date?.to ?? new Date()}
        />
      )}
    </div>
  )
}

export default BookingIsland
