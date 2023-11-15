
import { HText } from "@/shared/HText"
import { SelectedPage, BenefitType } from "@/shared/types"
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import { Benefit } from "./Benefit"
import { ActionButton } from "@/shared/ActionButton"
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'


const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6"/>,
    title: 'State of the art facilities',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"/>,
    title: "100's of diverse classes",
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6"/>,
    title: 'Expert and pro trainers',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

type Props = {
  handleSelectedPage: (value:SelectedPage) => void 
}

export const Benefits = ({handleSelectedPage}: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
      >
        <motion.div
          onViewportEnter={() => handleSelectedPage(SelectedPage.Benefits)}
          >
            {/* HEADER */}
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{once: true, amount: 0.5}}
              transition={{ duration: 0.5}}
              variants={{
                hidden: {opacity: 0, x:-50},
                visible: {opacity:1, x:0}
              }}
              className="md:w-3/5 md:my-5 "
              >
              <HText>MORE THAN JUST GYM.</HText>
              <p className="my-5 text-sm">
                Unrivaled Gym. Unparalleled training fitness classes. World class studios to get the Body Shapes that you dream of.. get your dream body now!
              </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              variants={container}
              className="md:flex items-center justify-between gap-8 md-flex">
              {benefits.map((benefit: BenefitType) => (
                <Benefit
                  key={ benefit.title }
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  handleSelectedPage={ handleSelectedPage }
                />
              ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
              {/* GRAPHIC */}
              <img
                src={ BenefitsPageGraphic }
                alt="Benefits page graphics"
                className="mx-auto"
                />
              {/* DESCRIPTION */}
              <div>
                {/* TITLE */}
                <div className="relative">
                  <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                  <motion.div
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{duration: 0.5}}
                    variants={{
                      hidden: {opacity: 0, x:50},
                      visible: {opacity:1, x:0}
                    }}
                    >
                    <HText>
                      MILLIONS OF HAPPY MEMBERS GETTING{' '}
                      <span className="text-primary-500">FIT</span>
                    </HText>
                  </motion.div>
                    
                  </div>
                </div>
                
                {/* DESCRIPTION */}
                <motion.div
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{delay: 0.2, duration: 0.5}}
                  variants={{
                    hidden: {opacity: 0, x:50},
                    visible: {opacity:1, x:0}
                  }}
                  >
                  <p className="my-5 ">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                  <p className="mb-5">Aure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </motion.div>

                {/* BUTTON */}
                <div className="relative mt-16">
                  <div className="before:absolute before:-bottom-20 before:rigth-40 before:z-[-1] before:content-sparkles">
                    <ActionButton
                      handleSelectedPage={handleSelectedPage}
                    >
                      Join Now
                    </ActionButton>
                  </div>
                </div>
              </div>
            </div>
        </motion.div>
    </section>
  )
}