"use client";

import { Bell, CheckCheck, MessageSquare } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import Link from "next/link";

interface Notification {
  id: string;
  title: string;
  description: string;
  timestamp: Date;
  read: boolean;
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "New message",
    description: "You have a new message from Olivia",
    timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
    read: false,
  },
  {
    id: "2",
    title: "New follower",
    description: "Someone started following you!",
    timestamp: new Date(Date.now() - 60 * 60 * 1000), // 1 hour ago
    read: true,
  },
  {
    id: "3",
    title: "New like",
    description: "Your post received a like!",
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
    read: false,
  },
];

const formatTimeAgo = (date: Date) => {
  const now = new Date();
  const diffInMinutes = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60)
  );

  if (diffInMinutes < 1) return "Just now";
  if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
  if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
  return `${Math.floor(diffInMinutes / 1440)}d ago`;
};

export function NotificationDropdown() {
  const [items, setItems] = useState(notifications);
  const unreadCount = items.filter((item) => !item.read).length;

  const markAllAsRead = () => {
    setItems((prevItems) => prevItems.map((item) => ({ ...item, read: true })));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <div className="absolute -top-1 -right-1 rounded-full bg-destructive text-muted-foreground h-4 w-4 flex items-center justify-center text-xs">
              {unreadCount}
            </div>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold">Notifications</h3>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllAsRead}>
              <CheckCheck className="h-4 w-4 mr-1" />
              Mark all read
            </Button>
          )}
        </div>
        <ScrollArea className="max-h-[300px] flex-1">
          {items.length > 0 ? (
            items.map((notification) => (
              <DropdownMenuItem key={notification.id} className="break-words">
                <div className="grid grid-cols-[25px_1fr]">
                  <Avatar className="h-5 w-5">
                    <AvatarImage src={`/avatars/${notification.id}.png`} />
                    <AvatarFallback>
                      <MessageSquare className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      {notification.title}
                    </p>
                    <p className="line-clamp-1 text-sm text-muted-foreground">
                      {notification.description}
                    </p>
                    <time
                      dateTime={notification.timestamp.toISOString()}
                      className="block text-xs text-muted-foreground"
                    >
                      {formatTimeAgo(notification.timestamp)}
                    </time>
                  </div>
                </div>
              </DropdownMenuItem>
            ))
          ) : (
            <DropdownMenuItem className="break-words">
              No notifications
            </DropdownMenuItem>
          )}
        </ScrollArea>
        <DropdownMenuSeparator />
        <Link href="/dashboard/settings">
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
