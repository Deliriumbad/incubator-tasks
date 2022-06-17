import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from './Select.module.css'

export type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select: React.FC<SelectPropsType> = (props) => {
    const {value, onChange, items} = props

    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(value)

    const selectedItem = items.find(i => i.value === value)
    const hoveredItem = items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(value)
    }, [value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        onChange(value);
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? items[i + 1]
                        : items[i - 1]

                    if (pretendentElement) {
                        onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                onChange(items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <>
            <div className={styles.select} tabIndex={0} onKeyUp={onKeyUp}>
                <span className={styles.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={styles.items}>
                        {items.map(i => <div
                            className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            key={i.value}
                            onClick={() => {
                                onItemClick(i.value)
                            }}>{i.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    )
}