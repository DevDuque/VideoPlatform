import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

// Responsable for the changes of the Lessons was a changeable content
interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const { slug } = useParams<{slug: string}>()

    // Change the Lesson's Status
    const isLessonAvailable = isPast(props.availableAt);

    // Format the date taken by GraphCMS 
    const availableDateFormatted = format(props.availableAt, "EEEE ' | '   MMMM d ' ⏱ '  ' 'k'h'mm ")

    const isActiveLesson = slug === props.slug

    return (
        <Link to={`/event/lesson/${props.slug}`}
        className="group"
        >
            <span className="text-gray-300">
                 {availableDateFormatted}
            </span>

        {/* Lesson Box */}
            <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors', {
                'bg-green-500': isActiveLesson,
            })}
            >
                {/* Header is responsable for Content's Status */}
                <header className="flex items-center justify-between">
                    {
                     /* If LessonAvailable = Blue color and CheckCircle,
                     else Orange Color and Lock 
                     */
                    } 
                    {isLessonAvailable ? (
                        <span className={classNames('text-sm text-blue-500 font-medium flex items-center gap-2', {
                            'text-white':isActiveLesson,
                            'text-blue-500': !isActiveLesson
                        })}> 
                        <CheckCircle size={20} />
                        Released Content 
                    </span>
                    ) : <span className="text-sm text-orange-500 font-medium flex items-center gap-2"> 
                    <Lock size={20} />
                    Soon...
                </span>}

                    <span className={classNames('text-xs rounded px-2 py-[0.125rem] text-white border border-green-300', {
                        'border-white': isActiveLesson,
                        'border-green-300': !isActiveLesson
                    })}>
                        {/* If type = live returns LIVE, else TUTORIAL  */}
                        {props.type === 'live' ? 'LIVE' : 'TUTORIAL'}
                    </span>

                </header>
                {/* Description of the Lesson */}
                <strong className={classNames('mt-5 block',{
                    'text-white': isActiveLesson,
                    'text-gray-200 ': !isActiveLesson
                })}>
                    {props.title}
                </strong>
            </div>
        </Link>
         
    )
}