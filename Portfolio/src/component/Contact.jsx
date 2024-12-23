import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';


const Contact = () => {
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1 }}
                className='my-10 text-center text-4xl'>Contact</motion.h2>
            <div className='text-center tracking-tighter '>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1. }}
                    className='my-4'>{CONTACT.address}</motion.p>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 1. }}
                    className='my-4'>{CONTACT.phoneNo}</motion.p>
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1 }}>
                    <a href="#" className='border-b my-4'>{CONTACT.email}</a>
                    <div className='my-4'>
                        <a href="#" className='border-b'>{CONTACT.gmail}</a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact