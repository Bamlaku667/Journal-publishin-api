import { Injectable } from '@nestjs/common';
import { Journal } from './journal.model';

@Injectable()
export class JournalService {
    // private journals: Journal[] = []

    private journals: Journal[] = [
        { id : 1,
          letter_of_application:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanetium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          title: 'Health Issues',
          full_Journal: '',
          department: 'health',
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        //   contributors: [
        //     {
        //       name: 'bamlaku',
        //       email: 'bamlakuhiruya@gmail.com',
        //       department: 'health',
        //       img_url: '',
        //       institue: 'addis ababa university',
        //     },
        //     {
        //       name: 'Yishak Bazezew',
        //       email: 'yishakbazezew@gmail.com',
        //       department: 'finance',
        //       img_url: '',
        //       institue: 'gondar university',
        //     },
        //   ],
        },
    
        {
          id: 2,
          letter_of_application:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanetium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          title: 'School Issues',
          full_Journal: '',
          department: 'School',
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        //   contributors: [
        //     {
        //       name: 'Haile Dereje',
        //       email: 'hailedereje@gmail.com',
        //       department: 'education',
        //       img_url: '',
        //       institue: 'Mekelle university',
        //     },
    
        //     {
        //       name: 'Jabir Ismael',
        //       email: 'jabirIsmael@gmail.com',
        //       department: 'science',
        //       img_url: '',
        //       institue: 'Adigrat university',
        //     },
        //   ],
        },
    
        {
          id: 4,
          letter_of_application:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusanetium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          title: 'Budget Issues',
          full_Journal: '',
          department: 'Budget',
          description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        //   contributors: [
        //     {
        //       name: 'Chala Chaltu',
        //       email: 'chalachaltu@gmail.com',
        //       department: 'finance',
        //       img_url: '',
        //       institue: 'Haremeya university',
        //     },
    
        //     {
        //       name: 'Paulos Mesfin',
        //       email: 'paulosmesfin@gmail.com',
        //       department: 'agriculture',
        //       img_url: '',
        //       institue: 'Bahrdar university',
        //     },
        //   ],
        },
      ];

    create(journal: Journal): Journal {
        const newJournal  = {id: Date.now(), ...journal}
        this.journals.push(newJournal)
        return newJournal;
    }

    findAll() : Journal[] {
        return this.journals;
    }

    findById(id: number): Journal {
        return this.journals.find(journal => journal.id === id);
    }

    update(id: number, journal: Journal): Journal {
        const index = this.journals.findIndex(journal => journal.id === id);
        const updatedRoom = {id, ...journal}
        this.journals[index] = updatedRoom
        return updatedRoom;
    }

    delete(id: number): void {
        this.journals = this.journals.filter(journal => journal.id !== id);
      }
}
