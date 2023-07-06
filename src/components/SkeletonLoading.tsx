import React, { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'

// SkeletonLoading component with props
export const SkeletonLoading: FC<SkeletonProps> = (props) => {
    return (
        <div>
            <Skeleton {...props} />
        </div>
    )
}

