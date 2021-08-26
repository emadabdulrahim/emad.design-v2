import * as React from "react"
import Image from "next/image"
import { Link, Member, team } from "@/staticData"
import { blue, slate } from "@radix-ui/colors"
import { Heading, Text } from "@/components"

const NUM_OF_COLUMNS = 3

interface TeamMemberProps extends Member {
  index: number
}

const TeamMember = ({
  name,
  title,
  text,
  img,
  country,
  social,
  links,
  index,
}: TeamMemberProps): JSX.Element => {
  return (
    <>
      <div className='p-8 overflow-y-auto team_member stack'>
        <div className='flex justify-between gap-5'>
          <div className='inline-flex overflow-hidden'>
            <Image src={img} width={80} height={80} alt='headshot' />
          </div>
          <div role='image' className='text-5'>
            {country}
          </div>
        </div>
        <div>
          <Heading size={5} className='mb-2'>
            {name}
          </Heading>
          <Heading as='h4' size={1} className='mb-1'>
            {title}
          </Heading>
        </div>
        <div className='flex border border-gray-g5'>
          <div className='link-item'>
            <a href={social}>
              <Text size={1}>LinkedIn</Text>
            </a>
          </div>
          {links.length
            ? links.map((link, i) => {
                const key = Object.keys(link)[0] as keyof Link

                return (
                  <div className='link-item' key={i}>
                    <a href={link[key]}>
                      <Text size={1} className='capitalize'>
                        {key}
                      </Text>
                    </a>
                  </div>
                )
              })
            : null}
        </div>
        <div>
          {text.map((t) => {
            const [question, answer] = t.split("...")

            return (
              <div key={answer} className='mb-4'>
                <Heading as='h4' size={3} className='mb-2'>
                  {question}...
                </Heading>
                <Text size={1}>{answer}</Text>
              </div>
            )
          })}
        </div>
      </div>
      <style jsx>
        {`
          .team_member {
            grid-column-start: ${((index % NUM_OF_COLUMNS) + 1) * 2};
            grid-row-start: ${Math.max(
              1,
              Math.ceil(index / NUM_OF_COLUMNS) * 2 - 1
            )};
            height: 400px;
            background: #fff;
          }

          .stack > * + * {
            margin-top: 1rem;
          }

          .link-item {
            flex: 1;
            padding: 0.5rem 1rem;
            text-align: center;
          }

          a {
            color: ${blue.blue11};
          }
        `}
      </style>
    </>
  )
}

const AshbyTeamDemo = () => {
  return (
    <>
      <div className='my-32'>
        <div className='px-8 mx-auto hero-container my-28'>
          <div className='max-w-screen-md'>
            <Heading as='h1' size={8} className='mb-7'>
              We’re a nimble team of humans working together
              to&nbsp;do&nbsp;big&nbsp;things.
            </Heading>
            <Text size={3}>
              Ashby is a remote-first company with colleagues working from four
              countries in North America and Europe. We have a physical office
              in San Francisco that we use to meet up as a team.
            </Text>
          </div>
        </div>
        <div className='border-t border-b team_layout border-gray-g4'>
          {team.map((member, i) => {
            return (
              <React.Fragment key={member.img}>
                {i % NUM_OF_COLUMNS === 0 && (
                  <div className='gap_cell_start gap_cell' />
                )}
                <TeamMember key={member.img} {...member} index={i + 1} />
                {i % NUM_OF_COLUMNS >= NUM_OF_COLUMNS - 1 ? (
                  <React.Fragment>
                    <div className='gap_cell' />
                    <div className='gap_cell gap_cell--low-height' />
                    <div className='gap_cell gap_cell--low-height' />
                    <div className='gap_cell gap_cell--low-height' />
                    <div className='gap_cell gap_cell--low-height' />
                    <div className='gap_cell gap_cell--low-height' />
                    <div className='gap_cell gap_cell--low-height' />
                    <div className='gap_cell gap_cell--low-height' />
                  </React.Fragment>
                ) : (
                  <div className='gap_cell' />
                )}
              </React.Fragment>
            )
          })}
        </div>
      </div>
      <style jsx>
        {`
          .team_layout {
            display: grid;
            grid-template-columns:
              minmax(150px, 1fr) minmax(325px, 450px) 48px minmax(325px, 450px)
              48px minmax(325px, 450px) minmax(150px, 1fr);
            grid-gap: 1px;
            background: ${slate.slate4};
          }
          .gap_cell {
            background: #fff;
            height: 400px;
          }

          .gap_cell_end {
            grid-column-start: 7;
          }

          .hero-container {
            max-width: calc(100vw - 300px);
          }

          .gap_cell--low-height {
            height: 48px;
          }
        `}
      </style>
    </>
  )
}

export default AshbyTeamDemo
