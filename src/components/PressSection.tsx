import { Mail, FileText, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ArtistBioModal from "./ArtistBioModal";
import PressPhotosModal from "./PressPhotosModal";
const PressSection = () => {
  const [bioOpen, setBioOpen] = useState(false);
  const [photosOpen, setPhotosOpen] = useState(false);
  
  return <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-black border-t border-gold/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-[0.1em] sm:tracking-[0.15em] uppercase">
            PRESS & BOOKINGS
          </h2>
          <p className="text-foreground/70 text-xs sm:text-sm">
            For interviews, collaborations or bookings:
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12 animate-fade-in">
          {/* Contact Email */}
          <div className="text-center">
            <a className="text-primary hover:text-primary/80 transition-colors text-base sm:text-lg tracking-wide break-all" href="mailto:me@mihaigruia.com">
              me@mihaigruia.com
            </a>
          </div>

          {/* Two Buttons */}
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
            <Button 
              variant="goldOutline" 
              size="lg" 
              onClick={() => setBioOpen(true)}
              className="text-center"
            >
              ARTIST BIO
            </Button>
            <Button 
              variant="goldOutline" 
              size="lg" 
              onClick={() => setPhotosOpen(true)}
              className="text-center"
            >
              PRESS PHOTOS
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 pt-4 flex-wrap">
            <a href="https://open.spotify.com/artist/6phLlgPzHgj6RxT3Jz4UEu?si=nrLnycUcRL6KyX5UwpgEVw" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors p-2" aria-label="Spotify">
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </a>
            <a href="https://music.apple.com/us/artist/mihai-gruia/1847803390" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors p-2" aria-label="Apple Music">
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.994 6.124a9.23 9.23 0 0 0-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 0 0-1.877-.726 10.496 10.496 0 0 0-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408a10.61 10.61 0 0 0-.1 1.18c-.01.193-.01.386-.015.579v12.098c.005.097.006.194.01.29.01.316.014.633.04.949.054.658.143 1.307.4 1.942.415 1.03 1.11 1.8 2.135 2.326.488.252 1.01.39 1.546.486.45.08.905.13 1.363.16.28.018.56.01.84.015h12.223c.033 0 .066-.003.1-.004l.596-.03c.535-.04 1.07-.09 1.596-.197 1.047-.21 1.943-.67 2.663-1.442.583-.625.967-1.357 1.144-2.183a5.482 5.482 0 0 0 .185-1.01 39.086 39.086 0 0 0 .063-2.024v-11.7c-.007-.26-.01-.52-.015-.78zM12.553 15.645c-1.03.023-2.047-.205-3.037-.605a7.51 7.51 0 0 1-2.334-1.542.844.844 0 0 1-.255-.56c-.01-.24.103-.45.295-.606.19-.154.414-.208.644-.165.17.032.318.12.446.235.78.702 1.687 1.173 2.694 1.448 1.01.276 2.03.337 3.047.17a6.236 6.236 0 0 0 2.913-1.203c.315-.232.545-.518.644-.894.123-.465.01-.89-.334-1.23-.44-.435-1.006-.705-1.59-.93a19.26 19.26 0 0 0-2.844-.86c-.963-.236-1.914-.512-2.83-.916-1.224-.538-2.16-1.363-2.647-2.655-.244-.647-.333-1.315-.254-2.005.133-1.158.65-2.112 1.534-2.888.884-.775 1.928-1.186 3.063-1.354 1.534-.228 3.007-.075 4.446.587.96.442 1.8 1.053 2.46 1.907.177.23.267.485.23.776-.04.29-.172.517-.41.677-.23.155-.48.194-.745.127-.23-.06-.416-.19-.58-.35-.663-.64-1.432-1.12-2.29-1.457-1.15-.452-2.332-.55-3.528-.316-1.002.195-1.87.604-2.52 1.414-.41.51-.617 1.097-.653 1.742-.03.55.07 1.07.3 1.558.36.77.937 1.31 1.66 1.712.633.353 1.315.595 2.01.806 1.16.353 2.325.695 3.46 1.135 1.054.41 1.99.983 2.745 1.832.736.828 1.12 1.783 1.148 2.887.023.896-.173 1.74-.61 2.52-.57 1.02-1.403 1.744-2.47 2.206-.915.396-1.88.59-2.87.61z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/gruiamihai" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/70 transition-colors p-2" aria-label="Instagram">
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <ArtistBioModal open={bioOpen} onOpenChange={setBioOpen} />
      <PressPhotosModal open={photosOpen} onOpenChange={setPhotosOpen} />
    </section>;
};
export default PressSection;