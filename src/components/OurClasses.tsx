import { SelectedPage } from '@/shared/types'
import image1 from '@/assets/image1.png'
import image2 from '@/assets/image2.png'
import image3 from '@/assets/image3.png'
import image4 from '@/assets/image4.png'
import image5 from '@/assets/image5.png'
import image6 from '@/assets/image6.png'
import { motion } from 'framer-motion'
import { HText } from '@/shared/HText'
import { ClassType } from '@/shared/types'
import { Class } from './Class'

const classes:Array<ClassType> = [
  {
    name: 'Weight training classes',
    description: 'Volutpat odio facilisis mauris sit amet massa. Facilisi nullam vehicula ipsum a arcu cursus. Commodo nulla facilisi nullam vehicula ipsum. Nec dui nunc mattis enim.',
    image: image1
  },
  {
    name: 'Pilates classes',
    description: 'Volutpat odio facilisis mauris sit amet massa. Facilisi nullam vehicula ipsum a arcu cursus. Commodo nulla facilisi nullam vehicula ipsum. Nec dui nunc mattis enim.',
    image: image2
  },
  {
    name: 'Training classes',
    description: 'Volutpat odio facilisis mauris sit amet massa. Facilisi nullam vehicula ipsum a arcu cursus. Commodo nulla facilisi nullam vehicula ipsum. Nec dui nunc mattis enim.',
    image: image3
  },
  {
    name: 'Calisthenics classes',
    description: 'Volutpat odio facilisis mauris sit amet massa. Facilisi nullam vehicula ipsum a arcu cursus. Commodo nulla facilisi nullam vehicula ipsum. Nec dui nunc mattis enim.',
    image: image4
  },
  {
    name: 'Body lifting classes',
    description: 'Volutpat odio facilisis mauris sit amet massa. Facilisi nullam vehicula ipsum a arcu cursus. Commodo nulla facilisi nullam vehicula ipsum. Nec dui nunc mattis enim.',
    image: image5
  },
  {
    name: 'Crossfit classes',
    description: 'Volutpat odio facilisis mauris sit amet massa. Facilisi nullam vehicula ipsum a arcu cursus. Commodo nulla facilisi nullam vehicula ipsum. Nec dui nunc mattis enim.',
    image: image6
  }
]

type Props = {
  handleSelectedPage: (value:SelectedPage) => void
}

export const OurClasses = ({ handleSelectedPage }: Props) => {
  return (
    <section
      id="ourclasses"
      className="w-full bg-primary-100 py-40">
        <motion.div
          onViewportEnter={() => handleSelectedPage(SelectedPage.OurClasses)}>
            <motion.div
              className="mx-auto w-5/6"
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.5}}
              transition={{ duration: 0.5}}
              variants={{
                hidden: {opacity: 0, x:-50},
                visible: {opacity:1, x:0}
              }}
              >
                <div className="md:w-3/5">
                  <HText>OUR CLASSES</HText>
                  <p className="py-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
            </motion.div>

            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
              <ul className="w-[2800px] whitespace-nowrap">
                {classes.map((item: ClassType, index) => (
                  <Class
                    key={`${item.name}-${index}`}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    />
                ))}
              </ul>
            </div>
        </motion.div>
    </section>
  )
}