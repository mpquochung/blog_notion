export const metadata = {
  title: 'Contact',
  description: 'This is contact page.',
};

import FlipCard from '@/components/author_card/flip_card';
import {quoc} from './author';
import Container from "@/components/container";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";



export default function ContactPage() {
  return(
    <>
      <h1 className="mt-12 text-center text-3xl font-bold">About me</h1>
      <div className="flex flex-col grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <FlipCard data = {quoc}/>
      </div>
      <h1 className="mt-8 text-center text-3xl font-bold">Contact</h1>
      <Container>
        {/* Contact form and information goes here */}
        <div className="text-center">
          <p className="text-lg">I am open to work.</p>
        </div>
        <div className="flex flex-col items-center my-5">
          <div className="text-center max-w-md">
            <p className="max-w-sm mt-5">
              Have something to say? I am here to share with you. Reach me by one of the following ways.
            </p>
            <div className="mt-0 flex flex-col items-center my-5">
              <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                <MapPinIcon className="w-4 h-4" />
                <span>Ha Noi, Viet Nam</span>
              </div>
              <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                <EnvelopeIcon className="w-4 h-4" />
                <span>maphquochung@gmail.com</span>
              </div>
              <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                <PhoneIcon className="w-4 h-4" />
                <span>+84 785 334 804</span>
              </div>
              <div className="flex items-center mt-2 space-x-4 text-dark-600 dark:text-gray-400 mt-4">
                <a href="https://www.linkedin.com/in/qhungmp/" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 480H7.4V180.9h92.9V480zm-46.1-358.8c-29.4 0-53.2-23.9-53.2-53.3s23.8-53.3 53.2-53.3 53.2 23.9 53.2 53.3-23.8 53.3-53.2 53.3zm394.8 358.8h-92.9V305.4c0-41.7-0.8-95.3-58.1-95.3-58.1 0-67 45.4-67 92.3v177.6H138.2V180.9h89.2v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.4 61.9 111.4 142.3v164.3z"/></svg>
                </a>
                <a href="https://github.com/mpquochung" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100013942060753" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.1 288l14.2-92.7h-88v-59.2c0-25.3 12.4-50.1 52.5-50.1h40V6.4C285.6 4.3 250.9 0 214.8 0 139.7 0 92.6 39.8 92.6 112.9v70.4H0v92.7h92.6V512h100.2V288H279.1z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
