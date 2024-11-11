import { useState } from 'react'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Slider,
} from '@nextui-org/react'
import { RiCheckFill } from 'react-icons/ri'

function VolumePricingCard() {
  const COST_PER_CREDIT = 0.003

  const [price, setPrice] = useState(9)

  const features = [
    'All features included',
    'No monthly payments',
    'Credits never expire',
  ]

  const handleChange = (val) => {
    switch (val) {
      case 1:
        setPrice(0)
        break
      case 2:
        setPrice(3000 * COST_PER_CREDIT)
        break
      case 3:
        setPrice(5000 * COST_PER_CREDIT)
        break
      case 4:
        setPrice(10000 * COST_PER_CREDIT)
        break
      case 5:
        setPrice(25000 * COST_PER_CREDIT)
        break
      case 6:
        setPrice(50000 * COST_PER_CREDIT)
        break
      case 7:
        setPrice(100000 * COST_PER_CREDIT)
        break
      case 8:
        setPrice(250000 * COST_PER_CREDIT)
        break
      case 9:
        setPrice(500000 * COST_PER_CREDIT)
        break
      case 10:
        setPrice(1000000 * COST_PER_CREDIT)
        break
      default:
        setPrice(0)
        break
    }
  }
  return (
    <div className="flex flex-col gap-9">
      <h3 className="text-xl font-semibold text-center">
        How many emails do you want to validate?
      </h3>
      <Slider
        step={1}
        formatOptions={{ style: 'percent' }}
        maxValue={10}
        minValue={0}
        marks={[
          {
            value: 1,
            label: '250',
          },
          {
            value: 2,
            label: '3,000',
          },
          {
            value: 3,
            label: '5,000',
          },
          {
            value: 4,
            label: '10,000',
          },
          {
            value: 5,
            label: '25,000',
          },
          {
            value: 6,
            label: '50,000',
          },
          {
            value: 7,
            label: '100,000',
          },
          {
            value: 8,
            label: '250,000',
          },
          {
            value: 9,
            label: '500,000',
          },
          {
            value: 10,
            label: '1,000,000',
          },
        ]}
        defaultValue={1}
        className="w-full"
        onChange={(v) => handleChange(v)}
      />
      <div className="flex flex-wrap justify-center">
        <Card className="basis-[360px] p-3">
          <CardHeader>
            <div>
              <h3 className="text-4xl font-bold mb-3">
                {Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                }).format(price)}
              </h3>
              <p className="text-small text-default-500">
                {price > 0
                  ? 'Cost per credit: $0.003'
                  : 'Our Free tier includes 250 emails every month'}
              </p>
            </div>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col gap-2 py-3">
              {features?.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-xl text-success">
                    {<RiCheckFill />}
                  </span>
                  <p className="font-medium text-default-500">{feature}</p>
                </div>
              ))}
            </div>
          </CardBody>
          <CardFooter>
            <Button className="w-full" color="primary">
              Get started
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default VolumePricingCard
