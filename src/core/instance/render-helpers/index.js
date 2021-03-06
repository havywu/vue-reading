/* @flow */

import { toNumber, toString, looseEqual, looseIndexOf } from 'shared/util'
import { createTextVNode, createEmptyVNode } from 'core/vdom/vnode'
import { renderList } from './render-list'
import { renderSlot } from './render-slot'
import { resolveFilter } from './resolve-filter'
import { checkKeyCodes } from './check-keycodes'
import { bindObjectProps } from './bind-object-props'
import { renderStatic, markOnce } from './render-static'
import { bindObjectListeners } from './bind-object-listeners'
import { resolveScopedSlots } from './resolve-slots'

export function installRenderHelpers (target: any) {
  target._o = markOnce
  target._n = toNumber
  target._s = toString
  target._l = renderList
  target._t = renderSlot
  target._q = looseEqual
  target._i = looseIndexOf
  target._m = renderStatic
  target._f = resolveFilter

  // 事件 别名按键修饰符处理
  target._k = checkKeyCodes
  
  target._b = bindObjectProps
  // 创建一个文本vnode
  target._v = createTextVNode
  // 创建一个空的vnode
  target._e = createEmptyVNode
  // 处理作用域插槽
  target._u = resolveScopedSlots
  target._g = bindObjectListeners
}
